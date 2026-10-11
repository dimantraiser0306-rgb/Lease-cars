import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/Lease-cars/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                cars: resolve(__dirname, "new-cars.html"),
                contacts: resolve(__dirname, "contacts.html"),
            },
        },
    },
});
