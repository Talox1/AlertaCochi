  
export interface Promotion {
   id:String;
   restaurant_id: '';
   name: '';
   likes:number;
   availableDay: '';
   numberReports:number;
   discount: '';
   image:File[];
   service:'';
   restrictions:'';
   url_image:'';
 }[]

   
export class ImagenCloud {
  id:String;
  promotion_id:String;
  image_url:String;
  image_public_id:String;
  created_at:String;
updated_at:String;
}