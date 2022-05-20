import { Component } from 'react'

import SecondCard from '../SecondCard'
import Header from '../Header'
import LeftMenu from '../LeftMenu'
import LoaderThreeDots from '../LoaderThreeDots'
import AcceptAndObserveHeading from '../AcceptAndObserveHeading'
import ApiFailureView from '../FailureView'

import {
   PlatformReviewMainContainer,
   CardContainer,
   CardUlElement
} from './styledComponents'

const INITIAL = 'INITIAL'
const IN_PROGRESS = 'IN_PROGRESS'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const componentApiStatus = {
   INITIAL,
   IN_PROGRESS,
   SUCCESS,
   FAILURE
}

class PlatformReviewPage extends Component {
   state = {
      cardApiStatus: componentApiStatus.INITIAL,
      cardData: []
   }

   componentDidMount() {
      this.getUserData()
   }

   getUserData = async () => {
      this.setState({ cardApiStatus: componentApiStatus.IN_PROGRESS })

      const Url =
         'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         }
      }
      const response = await fetch(Url, options)
      const data = await response.json()
      if (response.ok === true) {
         const updatedData = data.map(eachItem => ({
            commentsCount: eachItem.comments_count,
            postContent: eachItem.post_content,
            postId: eachItem.post_id,
            postedAt: eachItem.posted_at,
            profilePic: eachItem.posted_by.profile_pic,
            userId: eachItem.posted_by.user_id,
            userName: eachItem.posted_by.username,
            title: eachItem.title,
            tag1: eachItem.tags.length > 0 ? eachItem.tags[0].tag_name : null,
            tag2: eachItem.tags.length > 0 ? eachItem.tags[1].tag_name : null,
            isApproved: 'INITIAL'
         }))
         console.log(updatedData)
         localStorage.setItem('tableData', JSON.stringify(updatedData))
         this.setState({
            cardData: updatedData,
            cardApiStatus: componentApiStatus.SUCCESS
         })
      } else {
         this.setState({
            cardApiStatus: componentApiStatus.FAILURE
         })
      }
   }

   retryApi = () => {
      this.getUserData()
   }

   cardFailureView = () => <ApiFailureView retryApi={this.retryApi} />

   cardSuccessView = () => {
      const { cardData } = this.state
      return (
         <CardUlElement>
            {cardData.map((eachCard: any) => (
               <SecondCard
                  key={eachCard.postId}
                  cardItem={eachCard}
                  // updateUser={this.updateUser}
               />
            ))}
         </CardUlElement>
      )
   }

   cardInprogressView = () => <LoaderThreeDots />

   showCardsFunction = () => {
      const { cardApiStatus } = this.state
      switch (cardApiStatus) {
         case componentApiStatus.IN_PROGRESS:
            return this.cardInprogressView()
         case componentApiStatus.SUCCESS:
            return this.cardSuccessView()
         case componentApiStatus.FAILURE:
            return this.cardFailureView()
         default:
            return null
      }
   }

   render() {
      return (
         <PlatformReviewMainContainer>
            <LeftMenu />
            <CardContainer>
               <Header />
               <AcceptAndObserveHeading text='Accept Requests' />
               {this.showCardsFunction()}
            </CardContainer>
         </PlatformReviewMainContainer>
      )
   }
}

export default PlatformReviewPage
