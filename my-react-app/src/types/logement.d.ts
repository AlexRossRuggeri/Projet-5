type Host = {
    name: string;
    picture: string;
  };
  
  type Logement = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: Host;
    rating: number;
    location: string;
    equipments: string[];
    tags: string[];
  };
  
  // For JSON module support (optional but recommended)
  declare module "*.json" {
    const value: Logement[];
    export default value;
  }