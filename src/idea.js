class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Date.now();
    this.isStarred = false;
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }

  updateIdea(validateClick) {
    if (validateClick) {
    this.iSStarred = true;
    }
  }
}
 