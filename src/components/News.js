import React, { useEffect, useState, useCallback } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArrowUp, BarChart2, CheckCircle } from 'lucide-react';

const CATEGORY_META = {
  general:       { label: 'Top Headlines',  desc: 'Breaking news and top stories from around the world' },
  business:      { label: 'Business',       desc: 'Markets, economy, and corporate news' },
  entertainment: { label: 'Entertainment',  desc: 'Movies, music, celebrities, and pop culture' },
  health:        { label: 'Health',         desc: 'Medical breakthroughs, wellness, and healthcare' },
  science:       { label: 'Science',        desc: 'Discoveries, research, and scientific advancement' },
  sports:        { label: 'Sports',         desc: 'Scores, highlights, and sports analysis' },
  technology:    { label: 'Technology',     desc: 'Tech news, gadgets, and digital innovation' },
};

const News = (props) => {
  const [articles, setArticles]         = useState([]);
  const [loading, setLoading]           = useState(true);
  const [page, setPage]                 = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [showTop, setShowTop]           = useState(false);

  const meta = CATEGORY_META[props.category] || CATEGORY_META.general;

  const buildUrl = (p) =>
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${p}&pageSize=${props.pageSize}`;

  const updateNews = useCallback(async () => {
    if (!props.apiKey) {
      console.error('Nexus: REACT_APP_NEWS_API_KEY is not set in .env.local');
      setLoading(false);
      return;
    }
    props.setProgress(10);
    setLoading(true);
    try {
      const res  = await fetch(buildUrl(1));
      props.setProgress(50);
      const data = await res.json();
      props.setProgress(90);
      if (data.status === 'error') {
        console.error('NewsAPI error:', data.message);
      }
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (err) {
      console.error('Nexus: fetch failed', err);
    }
    setLoading(false);
    props.setProgress(100);
    // eslint-disable-next-line
  }, [props.category]);

  useEffect(() => {
    document.title = `${meta.label} — Nexus`;
    setPage(1);
    updateNews();
  }, [updateNews, meta.label]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fetchMoreData = async () => {
    if (!props.apiKey) return;
    const next = page + 1;
    try {
      const res  = await fetch(buildUrl(next));
      const data = await res.json();
      setArticles(prev => prev.concat(data.articles || []));
      setTotalResults(data.totalResults || 0);
      setPage(next);
    } catch (err) {
      console.error('Nexus: fetch more failed', err);
    }
  };

  const [heroArticle, ...restArticles] = articles;

  return (
    <div className="nm-page">
      {/* ── Editorial Masthead ── */}
      <div className="nm-category-header">
        <div className="nm-header-ghost" aria-hidden="true">{meta.label}</div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="nm-header-section-label">Nexus Daily</div>
          <h1 className="nm-category-title">{meta.label}</h1>
          <div className="nm-header-divider" />
          <p className="nm-category-subtitle">{meta.desc}</p>

          {!loading && articles.length > 0 && (
            <div className="nm-header-stats">
              <span className="nm-header-chip nm-header-chip-live">
                <span className="nm-stats-dot" />
                Live Feed
              </span>
              <span className="nm-header-chip">
                <BarChart2 size={12} strokeWidth={2} />
                {totalResults.toLocaleString()} stories
              </span>
              <span className="nm-header-chip">
                Showing {articles.length}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container" style={{ paddingBottom: '56px' }}>
        {loading && <Spinner />}

        {!loading && heroArticle && (
          <NewsItems
            hero
            title={heroArticle.title || ''}
            description={heroArticle.description || ''}
            imageUrl={heroArticle.urlToImage}
            newsUrl={heroArticle.url}
            author={heroArticle.author}
            date={heroArticle.publishedAt}
            source={heroArticle.source?.name || ''}
          />
        )}

        {!loading && restArticles.length > 0 && (
          <div className="nm-section-label">More Stories</div>
        )}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          endMessage={
            !loading && articles.length > 0 ? (
              <p className="nm-end-message">
                <CheckCircle size={14} strokeWidth={2} />
                All {articles.length} stories loaded
              </p>
            ) : null
          }
        >
          <div className="row g-4">
            {restArticles.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={item.url || i}>
                <NewsItems
                  title={item.title || ''}
                  description={item.description || ''}
                  imageUrl={item.urlToImage}
                  newsUrl={item.url}
                  author={item.author}
                  date={item.publishedAt}
                  source={item.source?.name || ''}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>

      <footer className="nm-footer">
        <div className="container">
          <strong>Nexus</strong> · Premium News Intelligence · {new Date().getFullYear()}
        </div>
      </footer>

      {showTop && (
        <button
          className="nm-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

News.defaultProps = {
  country:  'us',
  pageSize: 9,
  category: 'general',
};

News.propTypes = {
  country:     PropTypes.string,
  pageSize:    PropTypes.number,
  category:    PropTypes.string,
  apiKey:      PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
