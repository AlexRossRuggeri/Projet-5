// Export the type
export type Logement = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
      name: string;
      picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
  };
  
  // Optional: Keep JSON module declaration
  declare module "*.json" {
    const value: Logement[];
    export default value;
  }