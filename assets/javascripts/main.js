/**
 * Cookie time format
 * @param exp_days
 * @returns {string}
 */
function cookieTimeInDays(exp_days)
{
    var dt = new Date();
    dt.setTime(dt.getTime() + (exp_days * 86400000)); // Convert days to ms
    return dt.toUTCString();
}