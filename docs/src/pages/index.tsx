import type {ReactNode} from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title}>
      <div className="info">
          <h1>Добро пожаловать в документацию Provve!</h1>
          <div className="buttons">
            <button>
              <Link to={"/docs/users/intro"}>Пользователям</Link>
            </button>
            <button>
              <Link to={"/docs/devs/intro"}>Разработчикам</Link>
            </button>
          </div>
      </div>
    </Layout>
  );
}
