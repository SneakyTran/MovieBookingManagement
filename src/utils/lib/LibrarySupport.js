const DELAY_TIME = 4000;
class LibrarySupport {
    /**
     * Author: Sneaky
     * Check empty object
     * @param {*} obj
     * @returns
     */
    isEmptyObject = (obj) => {
        if (
            obj && //todonull and undefined check
            Object.keys(obj).length === 0 &&
            Object.getPrototypeOf(obj) === Object.prototype
        ) {
            return true;
        } else {
            return false;
        }
    };

    delay = (func) => {
        return new Promise((res) => setTimeout(res, func), DELAY_TIME);
    };
}

export default new LibrarySupport();
