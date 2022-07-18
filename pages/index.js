import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>Rachel Brouzes is a software developer, designer, and yoga teacher. Her background in finance, relationship building, and account management inform her calculated yet personable approach. Rachel is fueled by her passion for understanding the nuances of development. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and computer science and stay in tune with the latest software development strategies through continued coursework and professional development.
            Rachel's hunger for knowledge and determination to turn information into action has contributed to her most recent success at Bank of America. There, she helped lead region-wide award-winning campaigns for consumer lending in low income communities. Meanwhile, she has been working on vastly improving her software skills and making strides in the development community. Rachel believes mindfulness in the workplace is key to success, a tenet she lives out through her interests in yoga, meditation, and cooking.</p>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
