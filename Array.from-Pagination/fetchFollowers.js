const url = "https://api.github.com/users/bradtraversy/followers?per_page=1000";

const fetchFollowers = async () => {
    const response = await fetch(url);
    if (!response) throw new Error("Response not Valid")         
    const data = await response.json()
    return data
}

export default fetchFollowers
