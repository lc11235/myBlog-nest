import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { CreateArticleDTO } from '../models/article/create_article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  // add a page
  @Post('/create')
  async addCustomer(@Res() res, @Body() createArticleDTO: CreateArticleDTO) {
    const article = await this.articleService.addArticle(createArticleDTO);
    return res.status(HttpStatus.OK).json({
      message: "Article has been created successfully",
      article
    });
  }

  // Retrieve articles list
  @Get('articles')
  async getAllArticle(@Res() res) {
    const articles = await this.articleService.getAllArticle();
    return res.status(HttpStatus.OK).json(articles);
  }

  // Fetch a particular article using ID
  @Get('article/:articleID')
  async getArticle(@Res() res, @Param('articleID') articleID) {
    const article = await this.articleService.getArticle(articleID);
    if (!article) throw new NotFoundException("Article does not exist!");
    return res.status(HttpStatus.OK).json(article);
  }

  // Update a customer's details
  @Put('/update')
  async updateArticle(@Res() res, @Query('articleID') articleID, @Body() createArticleDTO: CreateArticleDTO) {
    const article = await this.articleService.updateArticle(articleID, createArticleDTO);
    if (!article) throw new NotFoundException("Article does not exist!");
    return res.status(HttpStatus.OK).json({
      message: 'Article has been successfully updated',
      article
    });
  }

  // Delete a article
  async deleteArticle(@Res() res, @Query('articleID') articleID) {
    const article  = await this.articleService.deleteArticle(articleID);
    if (!article) throw new NotFoundException('Article dose not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Article has been deleted',
      article
    });
  }
}