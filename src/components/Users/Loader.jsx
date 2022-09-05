import ContentLoader from "react-content-loader"

const Loader = () => {
  return (
    <ContentLoader viewBox="0 0 350 70">
      <circle cx="30" cy="30" r="30" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  )
}
export default Loader
