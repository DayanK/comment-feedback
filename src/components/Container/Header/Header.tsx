import Pattern from './Pattern';
import Logo from './Logo';
import PageHeading from './PageHeading';
import FeedbackForm from './FeedbackForm';


type HeaderProps = {
  onAddFeedbackToList: (message: string) => void
}
const Header = ({onAddFeedbackToList} :HeaderProps) => {
  return (
    <header>
        <Pattern />
        <Logo />
        <PageHeading />
        <FeedbackForm onAddFeedbackToList={onAddFeedbackToList}/>
    </header>
  )
}

export default Header