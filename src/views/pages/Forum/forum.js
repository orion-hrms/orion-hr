import React,{ Component } from 'react';
import{Table, Button } from 'reactstrap' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown , faThumbsUp , faTrashAlt ,faShare, faPlusCircle} from '@fortawesome/free-solid-svg-icons'

class App extends Component {
    state = {
        isLoading:false,
        invoices:[
            // {
            //     "Theme":"job",
            //     "Allow_Comment":"true",
            //     "Allow_Share":"false",
            //     "Author":"author1",
            //     "Title":"job wanted",
            //     "Content":"dsdsdsfsdfsdgf"
            // },
        
            // {
            //     "Theme":"test3",
            //     "Allow_Comment":"test3",
            //     "Allow_Share":"test3",
            //     "Author":"test3",
            //     "Title":"test3",
            //     "Content":"test3"
            // }
        ]
    }


    remove(id){
        console.log(id);
        let updateedInvoices = [...this.state.invoices].filter (i => i.id !== id)

        this.setState({invoices : updateedInvoices});
    }

    async componentDidMount() {
        const response = await fetch(
          "https://qotu9d6hfg.execute-api.us-east-1.amazonaws.com/Dev/upload_forum"
        );
        const body = await response.json();
        this.setState({ invoices: body, isLoading: false });
    }
    




    render() { 

        const isLoading = this.state.isLoading;
        const allinvoices = this.state.invoices;


       
        if (isLoading)
            return(<div>Loading...</div>);

        
            let invoices = 
            allinvoices.map( invoice => 
                <tr key={invoice.id}>
                    <td>{invoice.Tittle}</td>
                    <td>{invoice.Allow_Comment}</td>
                    <td>{invoice.Allow_Share}</td>
                    <td>{invoice.Author_Name}</td>
                    <td>{invoice.Theme}</td>
                    <td>{invoice.contents}</td>
                    <td><Button className="btn btn-lg btn-success" onClick={ () => this.remove(invoice.id)} > <FontAwesomeIcon icon={faThumbsUp} />Like </Button></td>
                    <td><Button className="btn btn-lg btn-danger" onClick="" > <FontAwesomeIcon icon={faThumbsDown} />Dislike </Button></td>
                    <td><Button className="btn btn-lg btn-info" onClick={ () => this.remove(invoice.id)} > <FontAwesomeIcon icon={faShare} />Share </Button></td>
                    <td><Button className="btn btn-lg btn-warning" onClick={ () => this.remove(invoice.id)} ><FontAwesomeIcon icon={faPlusCircle} />Comment </Button></td>
                    <td><Button className="btn btn-lg btn-warning" onClick={ () => this.remove(invoice.id)} ><FontAwesomeIcon icon={faTrashAlt} />Delete </Button></td>

                </tr>
            )

            return (
            
                <div className="">
    
                    <div className="row">
                            <div className="col-12">
                                <h4>Forum List</h4>
                            </div>
                    </div>
                    
                    <div className="row">
                        <div className=".col-xs-12 center text-center">
                            <Table dark responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope="row">Tittle</th>
                                        <th>Allow_Comment</th>
                                        <th>Allow_Share</th>
                                        <th>Author_Name</th>
                                        <th>Theme</th>
                                        <th>contents</th>
                                        <th colSpan="5">Actions</th>
                                        
                                    </tr>
                                </thead>
                            
                            <tbody>
                                {this.state.invoices.length === 0 ? <td colSpan="11">All caught up!</td> : invoices}
                            </tbody>
                            </Table>

                        </div>

                </div>


            </div>
        );
}
}
 
export default App;