
import { IAppInfo, IQueryFilter } from "../../src/recommendations/models";
import { ageFilter } from '../../src/recommendations/filters';

describe("Filter Service", () => {  
  
  it("should return apps above minimum age when app is restricted", async (done) => {
    
    // Setup
    const AGE = 18;
    
    const apps: IAppInfo[] = [<IAppInfo>{ "id": 1,
        "name": "App Restricted",
        "category": "Cat 1",
        "external_id": "com.trulia.android",
        "rating": 4.49,
        "install_count": 10000001,
        "description": "<div>Trulia helps you find your home and your neighborhood. Because when it comes to finding a place live, the house is only half of it. Trulia real estate listings include immersive photos and video tours that bring houses to life. Interactive maps provide crime reports, school ratings, and the scoop on local places—like restaurants and shops—to give you a feel for the neighborhood, wherever you are or wherever you’re looking. <br><br>You can search for a home for sale or apartment for rent by location, feature, size, price, keyword, and much, much more. Save and share your favorite homes, or contact the listing agent directly. Plus get instant alerts when new homes hit the market that match your preferences. <br><br>Whether you’re looking to buy or rent or you just like to keep on top of what’s new, interesting, and inspiring in the world of real estate, Trulia is the fastest, smartest, simplest way to get the real estate info you want. <br><br><br>Key features: <br><br>• Flexible Search: See nearby homes for sale, apartments for rent, and open houses. Or, search by price, neighborhood, number of bedrooms and bathrooms, and more. <br>• Full-Screen Photos: Scroll through vivid, full-screen photos of homes. <br>• Interactive Maps: See neighborhood maps with crime stats, school ratings, traffic info, average prices, and more. View maps in normal, satellite or terrain mode.<br>• Local Info: Get to know nearby restaurants, bars, shops, playgrounds, and entertainment venues. <br>• Instant Updates: Get notified when homes near you hit the market, when new properties are listed that meet your search criteria, or when the status of homes you are following changes—including a drop in price, when homes are sold, or open houses are scheduled.<br>• Video Tours: Step inside select properties right from your phone.<br>• Collections: Browse collections of homes and discover new properties in a beautiful, intuitive way.<br>• Boards: Save and organize all of your favorite homes and share them easily.<br>• Housing Type: Find whatever type of property you’re looking for, including single-family homes, apartments, condos, and townhouses.<br>• Affordability Breakdown: Calculate the full cost of owning your dream home, including mortgage, homeowner’s insurance, and property taxes.<br>•  Mortgage Calculator: Get personalized rates and calculate your potential mortgage.<br>• Open Houses: Find open houses for sale near you, and easily add them to your calendar.<br>• Directions: Take the stress out of your home search, get directions to open houses, homes for sale, or apartments for rent.<br>• Anytime Access: Log in to see your saved searches and homes across all your devices. <br>• Connect With Realtors: Quickly contact local realtors seamlessly to get more information on your favorite listings.<br>• Browse Together: Connect with nearby devices to share your favorite homes instantly.<br>• Voice Access: Ask Google to search for homes on Trulia using your voice.<br>• Android Wear Optimized: Get home alerts, view property details and photos, or contact the realtor from your watch. <br>• Trulia Widget: See new homes for sale, right on your home screen.<br><br>We love feedback! Send us yours anytime at android@trulia.com.</div>",
        "url": "https://play.google.com/store/apps/details?id=com.trulia.android&hl=en-us",
        "publisher": "Trulia",
        "icon": "https://lh3.googleusercontent.com/3NbmSpzeGWDZswG-BOagaGVQVYl7_BcTfU16zFLzuGT6SJNzZuqnnGsO4up-HGdjLA=w0",
        "min_age": 18}, 
        <IAppInfo>{
        "id": 2,
        "name": "App Not Restricted",
        "category": "Cat 2",
        "external_id": "com.trulia.android",
        "rating": 4.49,
        "install_count": 10000001,
        "description": "<div>Trulia helps you find your home and your neighborhood. Because when it comes to finding a place live, the house is only half of it. Trulia real estate listings include immersive photos and video tours that bring houses to life. Interactive maps provide crime reports, school ratings, and the scoop on local places—like restaurants and shops—to give you a feel for the neighborhood, wherever you are or wherever you’re looking. <br><br>You can search for a home for sale or apartment for rent by location, feature, size, price, keyword, and much, much more. Save and share your favorite homes, or contact the listing agent directly. Plus get instant alerts when new homes hit the market that match your preferences. <br><br>Whether you’re looking to buy or rent or you just like to keep on top of what’s new, interesting, and inspiring in the world of real estate, Trulia is the fastest, smartest, simplest way to get the real estate info you want. <br><br><br>Key features: <br><br>• Flexible Search: See nearby homes for sale, apartments for rent, and open houses. Or, search by price, neighborhood, number of bedrooms and bathrooms, and more. <br>• Full-Screen Photos: Scroll through vivid, full-screen photos of homes. <br>• Interactive Maps: See neighborhood maps with crime stats, school ratings, traffic info, average prices, and more. View maps in normal, satellite or terrain mode.<br>• Local Info: Get to know nearby restaurants, bars, shops, playgrounds, and entertainment venues. <br>• Instant Updates: Get notified when homes near you hit the market, when new properties are listed that meet your search criteria, or when the status of homes you are following changes—including a drop in price, when homes are sold, or open houses are scheduled.<br>• Video Tours: Step inside select properties right from your phone.<br>• Collections: Browse collections of homes and discover new properties in a beautiful, intuitive way.<br>• Boards: Save and organize all of your favorite homes and share them easily.<br>• Housing Type: Find whatever type of property you’re looking for, including single-family homes, apartments, condos, and townhouses.<br>• Affordability Breakdown: Calculate the full cost of owning your dream home, including mortgage, homeowner’s insurance, and property taxes.<br>•  Mortgage Calculator: Get personalized rates and calculate your potential mortgage.<br>• Open Houses: Find open houses for sale near you, and easily add them to your calendar.<br>• Directions: Take the stress out of your home search, get directions to open houses, homes for sale, or apartments for rent.<br>• Anytime Access: Log in to see your saved searches and homes across all your devices. <br>• Connect With Realtors: Quickly contact local realtors seamlessly to get more information on your favorite listings.<br>• Browse Together: Connect with nearby devices to share your favorite homes instantly.<br>• Voice Access: Ask Google to search for homes on Trulia using your voice.<br>• Android Wear Optimized: Get home alerts, view property details and photos, or contact the realtor from your watch. <br>• Trulia Widget: See new homes for sale, right on your home screen.<br><br>We love feedback! Send us yours anytime at android@trulia.com.</div>",
        "url": "https://play.google.com/store/apps/details?id=com.trulia.android&hl=en-us",
        "publisher": "Trulia",
        "icon": "https://lh3.googleusercontent.com/3NbmSpzeGWDZswG-BOagaGVQVYl7_BcTfU16zFLzuGT6SJNzZuqnnGsO4up-HGdjLA=w0"
        }
      ]
    
    let target = ageFilter;
    let results = apps.filter((i: IAppInfo) => target(<IQueryFilter>{ age: AGE }, i));
    expect(results.length).toEqual(2);
    done();
  });
});