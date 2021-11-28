


import React,{ Component } from 'react';
import{Table, Button } from 'reactstrap' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {Delete} from './delete.js'
import {Reload} from './delete.js'
import './delete.js'





class MANGE extends Component {
  



    state = {
        isLoading:false,
        invoices:[
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

                  {/*   <td><Button className="btn btn-lg btn-danger" onClick ><FontAwesomeIcon icon={faTrashAlt} />Delete </Button></td> */}
              

                </tr>
            )

            return (
            
                <div className="">
    
                    
                    
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
                                       {/*  <th colSpan="5">Actions</th> */}
                                        
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
                                <h4>Admin Page</h4>
                            </div>

                            <div className="col-12">
                                <input id="index" name=""/>
                                <input id="Delete" type="button" value="Conditional Delete" onClick={Delete} />
                                <input id="Reload" type="button" value="Reload" onClick={Reload} />  
                                {/* <textarea readonly id= "textarea" ></textarea> */}
                            </div>
                    


                    </div>


            </div>
        );
}
}
 
export default MANGE;