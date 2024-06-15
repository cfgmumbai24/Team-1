function formatDateTime(isoString) {
    const date = new Date(isoString);

    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of year

    // Extract time components
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const formattedHours = String(hours).padStart(1, '0'); // No leading zero for hours

    // Construct the formatted date and time string
    const formattedDateTime = `${formattedHours}:${minutes} ${ampm.toLowerCase()} ${day}/${month}/${year}`;

    return formattedDateTime;
}

export default formatDateTime;
