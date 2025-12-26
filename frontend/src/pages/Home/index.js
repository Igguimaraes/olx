import { useState, useEffect } from "react";
import { PageContainer } from "../../components/MainComponentes";
import { PageArea, SearchArea } from "./styled";
import Api from "../../helpers/Api";
import { Link } from "react-router-dom";

const Page = () => {
  const api = Api;
  const [statelist, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await api.getState();
      setStateList(sList);
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="texte" name="q" placeholder="o que vc procura?" />
              <select name="state>">
                {statelist.map((i, index) => (
                  <option key={index} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, index) => (
              <Link
                key={i.id}
                to={`/ads?cat=${i.slug}`}
                className="categoryItem">
                <img src={i.img} alt="" />
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};

export default Page;
