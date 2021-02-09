/* eslint-disable */

import React, { useState } from "react";
import { setup } from "goober";
import "./App.css";
import { AppContainer, Flex, Paragraph } from "./styles";
import axios from "axios";

setup(React.createElement);

function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    getRepos();
  }, []);

  function getRepos() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:>=1000&sort=stars&order=desc&per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setRepos(res.data.items);
      });
  }

  return (
    <AppContainer>
      <Flex flex="center" justify="center">
        <div>
          <Paragraph
            textTransform="uppercase"
            fontSize="40px"
            color="#00ffff"
            shadowColor="blue"
            align="center"
          >
            Top Public Repos
          </Paragraph>
          <Paragraph
            textTransform="uppercase"
            fontSize="18px"
            color="#fff"
            shadowColor={""}
            align="center"
          >
            Top github repos based on stars
          </Paragraph>
        </div>
      </Flex>
      <Flex flex="center" justify="center">
        <div>
          {loading ? (
            <Paragraph
              textTransform="uppercase"
              fontSize="14px"
              color="#00ffff"
              shadowColor="blue"
              align="center"
            >
              Loading...
            </Paragraph>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>
                    <Paragraph
                      textTransform="uppercase"
                      fontSize="14px"
                      color="#fff"
                      shadowColor={"#ff00ff"}
                      align="left"
                    >
                      Rank
                    </Paragraph>
                  </th>
                  <th>
                    <Paragraph
                      textTransform="uppercase"
                      fontSize="14px"
                      color="#fff"
                      shadowColor={"#ff00ff"}
                      align="left"
                    >
                      &#9733; Stars
                    </Paragraph>
                  </th>
                  <th>
                    <Paragraph
                      textTransform="uppercase"
                      fontSize="14px"
                      color="#fff"
                      shadowColor={"#ff00ff"}
                      align="left"
                    >
                      Forks
                    </Paragraph>
                  </th>
                  <th>
                    <Paragraph
                      textTransform="uppercase"
                      fontSize="14px"
                      color="#fff"
                      shadowColor={"#ff00ff"}
                      align="left"
                    >
                      Watchers
                    </Paragraph>
                  </th>
                  <th>
                    <Paragraph
                      textTransform="uppercase"
                      fontSize="14px"
                      color="#fff"
                      shadowColor={"#ff00ff"}
                      align="left"
                    >
                      Name
                    </Paragraph>
                  </th>
                  <th>
                    <Paragraph
                      textTransform="uppercase"
                      fontSize="14px"
                      color="#fff"
                      shadowColor={"#ff00ff"}
                      align="left"
                    >
                      Owner
                    </Paragraph>
                  </th>
                </tr>
              </thead>
              <tbody>
                {repos.map((item: any, idx: number) => {
                  return (
                    <tr key={idx}>
                      <td style={{ width: "64px" }}>
                        <Paragraph
                          textTransform="uppercase"
                          fontSize="14px"
                          color={
                            idx === 0
                              ? "#ffff00"
                              : idx === 1
                              ? "#ff6600"
                              : idx === 2
                              ? "#ff0000"
                              : "#fff"
                          }
                          shadowColor="blue"
                          align="left"
                          width="300px !important"
                        >
                          #{idx + 1}
                        </Paragraph>
                      </td>
                      <td style={{ width: "120px" }}>
                        <Paragraph
                          textTransform="uppercase"
                          fontSize="14px"
                          color={
                            idx === 0
                              ? "#ffff00"
                              : idx === 1
                              ? "#ff6600"
                              : idx === 2
                              ? "#ff0000"
                              : "#fff"
                          }
                          shadowColor="blue"
                          align="left"
                        >
                          {item.stargazers_count}
                        </Paragraph>
                      </td>
                      <td style={{ width: "120px" }}>
                        <Paragraph
                          textTransform="uppercase"
                          fontSize="14px"
                          color={
                            idx === 0
                              ? "#ffff00"
                              : idx === 1
                              ? "#ff6600"
                              : idx === 2
                              ? "#ff0000"
                              : "#fff"
                          }
                          shadowColor="blue"
                          align="left"
                        >
                          {item.forks}
                        </Paragraph>
                      </td>
                      <td style={{ width: "120px" }}>
                        <Paragraph
                          textTransform="uppercase"
                          fontSize="14px"
                          color={
                            idx === 0
                              ? "#ffff00"
                              : idx === 1
                              ? "#ff6600"
                              : idx === 2
                              ? "#ff0000"
                              : "#fff"
                          }
                          shadowColor="blue"
                          align="left"
                        >
                          {item.watchers}
                        </Paragraph>
                      </td>
                      <td style={{ width: "120px" }}>
                        <Paragraph
                          textTransform="uppercase"
                          fontSize="14px"
                          color={
                            idx === 0
                              ? "#ffff00"
                              : idx === 1
                              ? "#ff6600"
                              : idx === 2
                              ? "#ff0000"
                              : "#fff"
                          }
                          shadowColor="blue"
                          align="left"
                        >
                          <a
                            href={`https://github.com/${item.owner.login}/${item.name}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                            target="_blank"
                          >
                            {item.name}
                          </a>
                        </Paragraph>
                      </td>
                      <td style={{ width: "120px" }}>
                        <Paragraph
                          textTransform="uppercase"
                          fontSize="14px"
                          color={
                            idx === 0
                              ? "#ffff00"
                              : idx === 1
                              ? "#ff6600"
                              : idx === 2
                              ? "#ff0000"
                              : "#fff"
                          }
                          shadowColor="blue"
                          align="left"
                        >
                          <a
                            href={`https://github.com/${item.owner.login}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                            target="_blank"
                          >
                            {item.owner.login}
                          </a>
                        </Paragraph>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Flex>
      <a
        href="https://twitter.com/wachira_dev?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-show-count="true"
      >
        Follow @wachira_dev
      </a>
    </AppContainer>
  );
}

export default App;
