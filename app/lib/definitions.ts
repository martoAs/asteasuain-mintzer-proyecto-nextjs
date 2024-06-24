export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type UpdateAlbumInput= {
  title: String
  price: GLfloat
  new: String
  artist: String
  formats: [String] 
}