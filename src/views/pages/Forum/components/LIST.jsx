import React,{ Component } from 'react';
import{Table, Button } from 'reactstrap' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown , faThumbsUp , faPlusCircle} from '@fortawesome/free-solid-svg-icons'

class List extends Component {
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


      

    addLike(id){
        var time = new Date();

        alert(time)
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
            allinvoices.map((invoice,index) => 
                <tr key={invoice.id}>
                    
                    <td>{invoice.Tittle}</td>
                    <td>{invoice.Theme}</td>
                    <td>{invoice.Author_Name}</td>          
                    <td>{invoice.contents}</td>
                    <td>{invoice.Time}</td>

                    <td><Button className="btn btn-lg btn-light"  onClick={ () => this.addLike(invoice.id)}><FontAwesomeIcon icon={faThumbsUp} /> {invoice.Like}</Button></td>
                    <td><Button className="btn btn-lg btn-secondary"  onClick={ () => this.addLike(invoice.id)}><FontAwesomeIcon icon={faThumbsDown} /> {invoice.Dislike}</Button></td>
                
                    {/* <td><Button className="btn btn-lg btn-warning" onClick={ () => this.remove(invoice.id)} ><FontAwesomeIcon icon={faPlusCircle} />Comment </Button></td> */}
                    
                    
                </tr>
            )

            return (
            
                <div className="">
    
                    
                    
                    <div className="row">
                        <div className=".col-xs-12 center text-center">
                            <Table dark responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope="row">Title</th>
                                        <th>Theme</th>
                                        <th>Author_Name</th>
                                        <th>contents</th>
                                        <th>Time</th>
                                        <th colSpan="5"></th>      
                                    </tr>
                                </thead>
                            
                            <tbody>
                                {this.state.invoices.length === 0 ? <td colSpan="11">All caught up!</td> : invoices}
                            </tbody>
                            </Table>

                        </div>

                     </div>
                     <div className="row">
                            <div className="col-12">
                                <h4>List</h4>
                            </div>
                    </div>


            </div>
        );
}
}
 
export default List;