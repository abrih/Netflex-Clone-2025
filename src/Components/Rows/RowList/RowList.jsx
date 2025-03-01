import Row from "../Row/Row";
import Requested from "../../../Utils/requested";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={Requested.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row
        title="TOP RATE MOVIES"
        fetchurl={Requested.fetchNetflixOrginals}
        isLargeRow={false}
      />
      <Row
        title="ACTION MOVIES"
        fetchurl={Requested.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="COMEDY MOVIES"
        fetchurl={Requested.fetchComedyMovies}
        isLargeRow={false}
      />

      <Row
        title="HORROR MOVIES"
        fetchurl={Requested.fetchHorrorMovies}
        isLargeRow={false}
      />

      <Row
        title="ROMANCE MOVIES"
        fetchurl={Requested.fetchRomanceMovies}
        isLargeRow={false}
      />

      <Row
        title="DOCUMENTARIES MOVIES"
        fetchurl={Requested.fetchiDocumentaries}
        isLargeRow={false}
      />

      <Row
        title="TV SHOW"
        fetchurl={Requested.fetchTvShow}
        isLargeRow={false}
      />
      <Row
        title="DOCUMENTARIES"
        fetchurl={Requested.fetchiDocumentaries}
        isLargeRow={false}
      />
    </>
  );
};

export default RowList;

//
//
//
//
