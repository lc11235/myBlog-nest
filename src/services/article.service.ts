import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../models/article/article.interface';
import { CreateArticleDTO } from '../models/article/create_article.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) { }
    // fetch all articles
    async getAllArticle(): Promise<Article[]> {
        const articles = await this.articleModel.find().exec();
        return articles;
    }
    // Get a single article
    async getArticle(articleID): Promise<Article> {
        const article = await this.articleModel.findById(articleID).exec();
        return article;
    }
    // post a single article
    async addArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
        const newArticle = await this.articleModel(createArticleDTO);
        return newArticle.save();
    }
    // Edit article details
    async updateArticle(articleID, createArticleDTO: CreateArticleDTO): Promise<Article> {
        const updatedArticle = await this.articleModel
            .findByIdAndUpdate(articleID, createArticleDTO, { new: true });
        return updatedArticle;
    }
    // Delete a article
    async deleteArticle(articleID): Promise<any> {
        const deletedArticle = await this.articleModel.findByIdAndRemove(articleID);
        return deletedArticle;
    }
}