/**
 * Model representing a Pokenea.
 * @class
 */
class Pokenea {
    /**
     * Pokenea attributes.
     * @param {number} id - The unique identifier for the Pokenea.
     * @param {string} name - The name of the Pokenea.
     * @param {number} height - The height of the Pokenea in meters.
     * @param {string} skill - The special skill of the Pokenea.
     * @param {string} image - The URL of the Pokenea's image.
     * @param {string} phrase - The philosophical phrase of the Pokenea.
     */
    constructor(id, name, height, skill, image, phrase) {
        this._id = id;
        this._name = name;
        this._height = height;
        this._skill = skill;
        this._image = image;
        this._phrase = phrase;
    }

    /**
     * @returns {number} 
     */
    getId() {
        return this._id;
    }

    /**
     * @param {number} newId 
     */
    setId(newId) {
        this._id = newId;
    }

    /**
     * @returns {string} 
     */
    getName() {
        return this._name;
    }

    /**
     * @param {string} newName 
     */
    setName(newName) {
        this._name = newName;
    }

    /**
     * @returns {number} 
     */
    getHeight() {
        return this._height;
    }

    /**
     * @param {number} newHeight 
     */
    setHeight(newHeight) {
        this._height = newHeight;
    }

    /**
     * @returns {string} 
     */
    getSkill() {
        return this._skill;
    }

    /**
     * @param {string} newSkill 
     */
    setSkill(newSkill) {
        this._skill = newSkill;
    }

    /**
     * @returns {string} 
     */
    getImage() {
        return this._image;
    }

    /**
     * @param {string} newImage 
     */
    setImage(newImage) {
        this._image = newImage;
    }

    /**
     * @returns {string} 
     */
    getPhrase() {
        return this._phrase;
    }

    /**
     * @param {string} newPhrase 
     */
    setPhrase(newPhrase) {
        this._phrase = newPhrase;
    }
}

module.exports = Pokenea;
