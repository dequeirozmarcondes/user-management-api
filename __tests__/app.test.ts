import request from "supertest";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

describe("API Tests", () => {
    it("should return Hello World message", async () => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: "Hello World!" });
    });
});
