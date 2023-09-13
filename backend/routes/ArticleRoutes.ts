import { ArticleController } from '../controllers/ArticleController';
import { DefaultRoutes } from './_DefaultRoutes';

export class ArticleRoutes extends DefaultRoutes {
  constructor() {
    super(new ArticleController());
  }
}