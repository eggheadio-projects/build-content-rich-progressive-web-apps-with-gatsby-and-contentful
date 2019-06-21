module.exports = function(migration) {
  const seo = migration
    .createContentType("seo")
    .name("SEO")
    .description("")
    .displayField("title")
  seo
    .createField("title")
    .name("Title")
    .type("Symbol")
  seo
    .createField("description")
    .name("Description")
    .type("Symbol")
  seo
    .createField("keywords")
    .name("Keywords")
    .type("Symbol")
}
