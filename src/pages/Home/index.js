import { useState } from "react";
import { PageContainer } from "../../components/MainComponentes";
import { PageArea, SearchArea } from "./styled";
import useApi from "../../helpers/Api";

const Page = () => {
  const api = useApi;

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="texte" name="q" placeholder="o que vc procura?" />
              <select name="state>"></select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList"></div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};

export default Page;
