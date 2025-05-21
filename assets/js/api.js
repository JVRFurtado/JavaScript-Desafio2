
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/JVRFurtado/Profile-JSON/refs/heads/main/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
