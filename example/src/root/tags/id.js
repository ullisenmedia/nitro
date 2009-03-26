var Paginator = require("nitro/utils/paginator").Paginator;

var Article = require("blog/article").Article,
    Tag = require("blog/tag").Tag;
    
exports.app = function(request, response) {
    var params = request.params();

    if (request.isGet()) {
        var pg = new Paginator(request, 5);
        var tag = $db.query("SELECT id, name FROM Tag WHERE name=?", params.id).one(Tag);
        var articles = $db.query("SELECT a.*, ca.id AS categoryId, ca.label AS categoryLabel, COUNT(c.parentId) AS commentCount FROM Article a LEFT JOIN TagToArticle tta ON tta.parentId=a.id LEFT JOIN Comment c ON a.id=c.parentId LEFT JOIN Category ca ON a.categoryId=ca.id WHERE tta.tagId=? GROUP BY a.id ORDER BY a.created DESC " + pg.sqlLimit(), tag.id).all(Article);

        response.setData({
            tag: tag,
            articles: articles,
            paginator: pg.paginate(articles)
        });
    } 
}
