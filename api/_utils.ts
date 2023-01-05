export const getDateBasedOnTimezone = (timeZone: string = "Europe/London") => {
    const dateString = new Date().toLocaleString("en-GB", { timeZone });
    return new Date(dateString);
}