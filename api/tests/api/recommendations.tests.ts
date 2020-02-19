
import app from "../../src/app";
import request from "supertest";

describe("RECOMMENDATIONS API", () => {  
  it("GET RECOMMENDATIONS", async (done) => {
    
    // Setup
    const AGE = 70;
    const RATING = 4.37;
    const PREFERRED_CATEGORIES = ["Shopping"];

    // Run
    const { body } = await request(app).post('/apps/discover').send({ 
      age: AGE, 
      rating: RATING, 
      categories: PREFERRED_CATEGORIES 
    });
    
    // Assert
    for (let app of body) {
      expect(app.min_age).toBeGreaterThanOrEqual(AGE);
      expect(app.rating).toBeGreaterThanOrEqual(RATING);
      expect(PREFERRED_CATEGORIES).toContain(app.category);
    }

    done();
  });
});