export default class Products {
  private _productId: number;
  private _title: string;
  private _description: string;
  private _price: number;
  private _discountPercentage: number
  private _rating: number;
  private _stock: number;
  private _brand: string;
	private _category: string;
	private _thumbnail: string;
	private _images: string[];
  private _isFavorite: boolean;


  constructor(
    productId: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
    isFavorite: boolean = false
    ) {

      this._productId = productId
      this._title = title
      this._description = description
      this._price = price
      this._discountPercentage = discountPercentage
      this._rating = rating
      this._stock = stock
      this._brand = brand
      this._category = category
      this._thumbnail = thumbnail
      this._images = images
      this._isFavorite = isFavorite
    }

    get productId(): number {
      return this._productId;
    }
    get title(): string {
      return this._title;
    }
    get description(): string {
      return this._description;
    }
    get price(): number {
      return this._price;
    }
    get discountPercentage(): number {
      return this._discountPercentage;
    }
    get rating(): number {
      return this._rating;
    }
    get stock(): number {
      return this._stock;
    }
    get brand(): string {
      return this._brand;
    }
    get category(): string {
      return this._category;
    }
    get thumbnail(): string {
      return this._thumbnail;
    }
    get images(): string[] {
      return this._images;
    }
    get isFavorite(): boolean {
      return this._isFavorite;
    }
}

