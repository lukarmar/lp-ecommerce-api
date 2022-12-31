import RepositoryInterface from '../../@shared/repository-interface';
import { SaveDataProductDTO } from '../DTOs/SaveDataProductDTO';

export default interface ProductsRepositoryInterface extends RepositoryInterface<SaveDataProductDTO> {}