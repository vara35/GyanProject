import { observable } from 'mobx'

class SpotifyCategoryModel {
   @observable categoryCardImage!: string
   @observable id!: string

   constructor(categoryDetails) {
      this.categoryCardImage = categoryDetails.icons[0].url
      this.id = categoryDetails.id
   }
}

export default SpotifyCategoryModel
