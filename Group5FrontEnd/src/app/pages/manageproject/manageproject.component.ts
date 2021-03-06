import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-manageproject',
  templateUrl: './manageproject.component.html',
  styleUrls: ['./manageproject.component.scss']
})
export class ManageprojectComponent implements OnInit {
  Projects: any[] = [ ];
  Attribute: any[] = [ ];
  selectedproject = -1;

  constructor(private projSvc:ProjectsService) { 
     projSvc.getApprovedProjects().subscribe(result=>{
       this.Projects=result.data.projects;
     })
  }

  showDetail(index,project){
    console.log(index);
    console.log(project);
    if (this.selectedproject === index){
      this.selectedproject = -1;
    }
    else {
      this.selectedproject = index;
    }
  }

  try(){
    console.log();
  }
  ngOnInit(): void {
  }

}
