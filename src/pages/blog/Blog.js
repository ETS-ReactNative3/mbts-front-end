import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Pagination } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import './Blog.scss';

// CI
import api from '../../api/api';

const pageType = {
  "my-blog": {
    title: "Dekerta Daily",
    class: "my"
  },
  "dekerta-blog": {
    title: "Dekerta Athlete Program",
    class: "dekerta"
  },
  "articles": {
    title: "Articles",
    class: "dekerta"
  }
}


class Blog extends React.Component {

    state = {
        list: [],
        rights: false,
        forbidden: true,
        page: 1,
        totalPages: 1
    };

    componentWillMount() {
        this.getList();
    }

   async getList(page = 1) {
     try {
        let results = await api.list(this.props.blogType, page);

        this.setState({
          list: results.blogs,
          rights: results.rights,
          forbidden: false,
          page,
          totalPages: ((results.total / 7) < 1) ? 1 : Math.ceil(results.total / 7)
        });
     } catch (err) {
       alert(err);
       this.setState({list: []});
       this.props.history.replace('/');
     }
   }

    render() {
        let { blogType } = this.props;
        let { list, rights, forbidden } = this.state;

        if (forbidden) return null;

        return (
            <main>
                <header className={`blog-header ${pageType[blogType].class}`} >
                     <div className="welkome">
                         { pageType[blogType].title }
                     </div>
                </header>
                {
                  list && list.length && this.getPagination()
                }
                <div className="blogs">
                    {
                        list && list.length ?
                        list.map((item, i) => {
                            return (
                                    <div key={i} className="box">
                                        <Link to={`/${ blogType }/${ item._id }`}>
                                            <div className="blog-wrapper">
                                                <div
                                                className="blog-image"
                                                style={{ backgroundImage: `url("${item.url}")` }}>

                                                    <div className="overlay"/>

                                                </div>
                                                <div className="blog-text fs-4">
                                                    <div className="fs-2 blog-title">
                                                        { item.name }
                                                    </div>
                                                    <div className="preview">
                                                        { item.preview }
                                                    </div>
                                                    <div className="date">
                                                        { new Date(item.date).toLocaleDateString() }
                                                    </div>
                                                    <h4 className="arrow">
                                                        >
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            );
                        }) :
                            <div>he empty list</div>
                    }
                </div>
                {
                   rights &&
                   <div className="btn-create">
                       <Button bsStyle="info" onClick={ () => this.onCreateNew() }>
                          Create new
                       </Button>
                   </div>
                }
            </main>
        );
    }

    getTotalPages() {

    }

    onPageChange(page) {
      this.getList(page);
    }

    getPagination() {
      let { page, totalPages } = this.state;
      let pagins = [];
      pagins.push(
        <Pagination.Prev
            key={111}
            onClick={ () => {
              if (page === 1) return false;
              this.onPageChange(page - 1)
            } }
            disabled={ page === 1 }
        />);

      for (let i = 0; i < totalPages; i++) {
        pagins.push(
          <Pagination.Item key={i}
          onClick={ () => { this.onPageChange(i + 1) } } active={ i + 1 === page }>
            { i + 1 }
          </Pagination.Item>
        );
      }

      pagins.push(<Pagination.Next
        key={222}
        onClick={() => {
          if (page === totalPages) return false;
          this.onPageChange(page + 1)
        }}
        disabled={page === totalPages}
        />);

      return (
        <div className="pagination-wrapper">
          <Pagination bsSize="small">
            {
              pagins
            }
          </Pagination>
        </div>
      );
    }

    onCreateNew() {
      let { history, blogType } = this.props;
        history.push(`${ blogType }/new`);
    }

    async getData() {
        return await api.list(this.props.blogType);
    }
}

export default withRouter(Blog);
