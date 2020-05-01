const axios = require("axios");
describe("API Routes", () => {
    describe("GET  /api/reservations", () => {
        it("should have a 200 status code", async () => {
            const {status} = await axios.get("/api/reservations");
            expect(status).toBe(200);
        });
        it("should have content type json", async () => {
            const expectedContentType = "application/json";
            const {headers} = await axios.get("/api/reservations");
            const hasJSON = JSON.stringify(headers).indexOf(expectedContentType) !== -1;
            expect(hasJSON).toBe(true);
        });
        it("should return an array of objects if it's not empty", async () => {
            const {data} = await axios.get("/api/reservations");
            const isArray = Array.isArray(data);
            const isObject = typeof data[0] === "object";
            if (data.length > 0) {
                expect(isObject).toBe(true);
            } else {
                expect(isObject).toBe(false);
            }
        });
        it("should return an array", async () => {
            const {data} = await axios.get("/api/reservations");
            const isArray = Array.isArray(data);
            expect(isArray).toBe(true);
        });
        it("should return an array of objects if it's not empty", async () => {
            const {data} = await axios.get("/api/reservations");
            const isObject = typeof data[0] === "object";
            const [reservation] = data;
            if (data.length > 0) {
                expect(reservation.name).toBeTruthy();
            } else {
                expect(isObject).toBe(false);
            }
        });
    });
    describe("GET  /api/waitlist", () => {
        it("should have a 200 status code", async () => {
            const {status} = await axios.get("/api/waitlist");
            expect(status).toBe(200);
        });
        it("should have content type json", async () => {
            const expectedContentType = "application/json";
            const {headers} = await axios.get("/api/waitlist");
            const hasJSON = JSON.stringify(headers).indexOf(expectedContentType) !== -1;
            expect(hasJSON).toBe(true);
        });
        it("should return an array of objects if it's not empty", async () => {
            const {data} = await axios.get("/api/waitlist");
            const isArray = Array.isArray(data);
            const isObject = typeof data[0] === "object";
            if (data.length > 0) {
                expect(isObject).toBe(true);
            } else {
                expect(isObject).toBe(false);
            }
        });
        it("should return an array", async () => {
            const {data} = await axios.get("/api/waitlist");
            const isArray = Array.isArray(data);
            expect(isArray).toBe(true);
        });
        it("should return an array of objects if it's not empty", async () => {
            const {data} = await axios.get("/api/waitlist");
            const isObject = typeof data[0] === "object";
            const [reservation] = data;
            if (data.length > 0) {
                expect(reservation.name).toBeTruthy();
            } else {
                expect(isObject).toBe(false);
            }
        });
    });
    describe("POST /api/reservations", () => {

    })
});
