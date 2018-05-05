module.exports = {
    trim(value) {
        return typeof value === "string" ? value.trim() : value
    },
    reverse(value) {
        return typeof value === "string" ? value.split(").reverse().join(") : value
    },
    slice(value, start, end) {
        return typeof value === "string" ? value.slice(start, end) : value
    }
}