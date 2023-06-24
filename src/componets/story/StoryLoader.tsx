import ContentLoader from 'react-content-loader'

const StoryLoader = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={45}
    viewBox="0 0 400 45"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="1" rx="3" ry="3" width="250" height="16" />
    <rect x="275" y="1" rx="3" ry="3" width="100" height="16" />
    <circle cx="8" cy="8" r="8" />
    <rect x="0" y="29" rx="3" ry="3" width="60" height="11" />
    <rect x="65" y="29" rx="3" ry="3" width="60" height="11" />
    <rect x="130" y="29" rx="3" ry="3" width="65" height="11" />
    <rect x="200" y="29" rx="3" ry="3" width="65" height="11" />
  </ContentLoader>
)

export default StoryLoader
