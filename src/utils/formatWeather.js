// Captalising condition text like "clear sky" to "Clear Sky"

export const formatCondition = (text) => {
    return text
    .split(" ")
    .map((word) => word.chatAt(0).toUpperCase() + word.slice(1))
    .join(" ");

};

// Converting Unix timestamp to readable format like "5:27 AM"

export const formatTime = (unix) => {
    
    return new Date(unix * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: "true"
    });
};

export const formatDate = (localtime) => {
    const date = new Date(localtime);
    
    return date.toLocaleDateString("en-GB",{
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
};

export const formatTemp = (temp) => Math.round(temp);