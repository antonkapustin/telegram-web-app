export class Router {
    constructor(routes) {
        this.routes = new Map();
        if (routes || []) {
            routes.forEach((element) => {
                this.routes.set(element.path, element.cb);
            });
        }

        this.listener();
    }

    add(path, cb) {
        this.routes = this.routes.set(path, cb);
        return this.routes;
    }

    listener() {
        window.addEventListener("popstate", this.onHashChange.bind(this));
    }

    onHashChange() {
        let current = location.hash.slice(1);

        if (!current) {
            current = "TgWebAppData";
        } else {
            current = current.match(/\w+/gi)[0];
        }

        let newCurrent = current[0].charAt(0).toUpperCase() + current.slice(1);

        console.log(this.routes, newCurrent)

        this.routes.get(newCurrent).call(null);
    }
}