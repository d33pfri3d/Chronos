export const getDateBasedOnTimezone = (timeZone: string = "UTC") => {
    const dateString = new Date().toLocaleString("en-US", {
        timeZone,
    });
    return new Date(dateString);
}