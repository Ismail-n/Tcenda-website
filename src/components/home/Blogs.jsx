import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";

const blogPosts = [
  {
    image: "blog1",
    title: "How AI is Driving Innovation in Middle east",
    description:
      "Explore real-world applications of AI and how businesses are leveraging it to automate tasks, enhance customer experience, and make smarter decisions.",
    author: "John Deo",
    date: "26 June 2025",
  },
  {
    image: "blog2",
    title: "Cybersecurity Trends in 2025",
    description:
      "Understand the latest cybersecurity threats, tools, and best practices to keep your data and infrastructure safe in a rapidly evolving digital world.",
    author: "John Deo",
    date: "26 June 2025",
  },
  {
    image: "blog3",
    title: "Mobile-First Digital Strategy",
    description:
      "Explore real-world applications of AI and how businesses are leveraging it to automate tasks, enhance customer experience, and make smarter decisions.",
    author: "John Deo",
    date: "26 June 2025",
  },
];

const Blogs = () => {
  const { t } = useTranslation();
  return (
    <section className="blogs common_section">
      <Container>
        <Title title={t("Blogs")} />
        <SubTitle subTitle={t("Insights That Inspire Innovation")} />
        <Row className="blogs_row">
          {blogPosts?.map((item) => (
            <BlogCard key={item?.image} item={item} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;

const BlogCard = ({ item }) => {
  const { t } = useTranslation();
  const { image, title, description, author, date } = item || {};
  return (
    <Col lg={4} md={6}>
      <div className="blog_card_inner">
        <Image
          src={`/images/home/${image}.webp`}
          width={347}
          height={210}
          alt={t(`${title} blog thumbnail`)}
        />
        <div className="content">
          <h3>{t(title)}</h3>
          <p>{t(description)}</p>
          <small>
            {t(author)} — {t(date)}
          </small>
        </div>
      </div>
    </Col>
  );
};
