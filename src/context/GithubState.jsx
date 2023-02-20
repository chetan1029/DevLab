import GithubContext from "./GithubContext";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

const fetcher = async (url) => {
    const res = await fetch(url, {
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": "Bearer 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",
        }
    })
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')
        // Attach extra info to the error object.
        error.info = await res.json()
        error.status = res.status
        throw error
    }

    return res.json()
};

const mainURL = "https://api.github.com";
const PAGE_SIZE = 10;

const GithubState = (props) => {

    function useUser(username) {
        const { data, error, isLoading } = useSWR(mainURL + "/users/" + username, fetcher);

        return {
            user: data,
            isError: error,
            isLoading
        }
    }

    function useSearchUsers(username, languages, followers, repos) {
        const searchURL = "language:" + languages.join("|") + "+followers:%3E" + followers + "+repos:%3E" + repos + "+-user:" + username;

        const { data, mutate, size, setSize, isValidating, isLoading, error } = useSWRInfinite((index) => mainURL + "/search/users?q=" + searchURL + "&per_page=" + PAGE_SIZE + "&page=" + (index + 1), fetcher);

        const results = data && data[0].total_count
        let userListData = data ? [].concat(...data) : [];
        userListData = userListData.map((userListItem) => userListItem.items.map(userListItemsItem => userListItemsItem));
        userListData = userListData.flat(1);

        const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

        const isEmpty = data?.[0]?.items?.length === 0;
        const isReachingEnd =
            isEmpty || (data && data[data.length - 1]?.items?.length < PAGE_SIZE);

        const userList = {
            "total_count": results,
            "items": userListData
        }

        return {
            userList,
            mutate,
            size,
            setSize,
            isValidating,
            isLoading,
            isLoadingMore,
            isReachingEnd,
            isError: error
        }
    }

    function useUserLanguages(username) {

        const { data, error, isLoading } = useSWR(mainURL + "/users/" + username + "/repos", fetcher);

        let languages = [];

        if (!isLoading && !error) {
            languages = data.map((user) => {
                return user.language
            })

            languages = languages.filter((language, index) => {
                return typeof language === "string" && languages.indexOf(language) === index;
            })
        }

        return {
            languages: languages.slice(0, 5),
            isError: error,
            isLoading
        }
    }

    return (
        <GithubContext.Provider value={{ useUser, useSearchUsers, useUserLanguages }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState