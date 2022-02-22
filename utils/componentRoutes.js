import AdventurersWantedVideo from '@components/recvan/AdventurersWantedVideo'
import AdventurersWantedVideoProps from '@components/recvan/AdventurersWantedVideo.props'
import Brands, { BrandsProps } from '@components/recvan/Brands'
import Carousel from '@components/recvan/Carousel'
import CarouselProps from '@components/recvan/Carousel.props'
import Excellence from '@components/recvan/Excellence'
import ExcellenceProps from '@components/recvan/Excellence.props'
import Footer from '@components/recvan/Footer'
import FooterProps from '@components/recvan/Footer.props'
import FormEmailOffers from '@components/recvan/FormEmailOffers'
import FormEmailOffersProps from '@components/recvan/FormEmailOffers.props'
import FormMoreInfo from '@components/recvan/FormMoreInfo'
import FormMoreInfoProps from '@components/recvan/FormMoreInfo.props'
import FormSell from '@components/recvan/FormSell'
import FormSellProps from '@components/recvan/FormSell.props'
import HeroNav from '@components/recvan/HeroNav'
import HeroNavProps from '@components/recvan/HeroNav.props'
import History from '@components/recvan/History'
import HistoryProps from '@components/recvan/History.props'
import InventoryDetail from '@components/recvan/InventoryDetail'
import InventoryDetailProps from '@components/recvan/InventoryDetail.props'
import InventoryListing from '@components/recvan/InventoryListing'
import InventoryListingProps from '@components/recvan/InventoryListing.props'
import Location from '@components/recvan/Location'
import LocationProps from '@components/recvan/Location.props'
import PageContent from '@components/recvan/PageContent'
import PageContentProps from '@components/recvan/PageContent.props'
import RecvanBlog from '@components/recvan/RecvanBlog'
import RecvanBlogProps from '@components/recvan/RecvanBlog.props'
import SocialInstagram from '@components/recvan/SocialInstagram'
import SocialInstagramProps from '@components/recvan/SocialInstagram.props'
const componentRoutes = [
  ['hero-nav', HeroNav, HeroNavProps],
  ['carousel', Carousel, CarouselProps],
  ['excellence', Excellence, ExcellenceProps],
  [
    'adventurers-wanted-video',
    AdventurersWantedVideo,
    AdventurersWantedVideoProps,
  ],
  ['brands', Brands, BrandsProps],
  ['history', History, HistoryProps],
  ['social-instagram', SocialInstagram, SocialInstagramProps],
  ['recvan-blog', RecvanBlog, RecvanBlogProps],
  ['footer', Footer, FooterProps],
  ['inventory-detail', InventoryDetail, InventoryDetailProps],
  ['inventory-listing', InventoryListing, InventoryListingProps],
  ['location', Location, LocationProps],
  ['form-email-offers', FormEmailOffers, FormEmailOffersProps],
  ['page-content', PageContent, PageContentProps],
  ['form-more-info', FormMoreInfo, FormMoreInfoProps],
  ['form-sell', FormSell, FormSellProps],
]
export const templateRoutes = [
  [
    'homepage',
    [
      ['hero-nav', HeroNav, HeroNavProps],
      ['carousel', Carousel, CarouselProps],
      ['excellence', Excellence, ExcellenceProps],
      [
        'adventurers-wanted-video',
        AdventurersWantedVideo,
        AdventurersWantedVideoProps,
      ],
      ['brands', Brands, BrandsProps],
      ['history', History, HistoryProps],
      ['social-instagram', SocialInstagram, SocialInstagramProps],
      ['recvan-blog', RecvanBlog, RecvanBlogProps],
      ['footer', Footer, FooterProps],
    ],
  ],
  [
    'localtion',
    [
      ['hero-nav', HeroNav, { ...HeroNavProps, transparent: false }],
      ['location', Location, LocationProps],
      ['footer', Footer, FooterProps],
    ],
  ],
  [
    'form-more-info',
    [
      ['hero-nav', HeroNav, { ...HeroNavProps, transparent: false }],
      ['form-more-info', FormMoreInfo, FormMoreInfoProps],
      ['footer', Footer, FooterProps],
    ],
  ],
]

export default componentRoutes
