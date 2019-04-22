import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillViewComponent } from './view/bill-view/bill-view.component';
import { CustomerViewComponent } from './view/customer-view/customer-view.component';
import { EstimateViewComponent } from './view/estimate-view/estimate-view.component';
import { ProductViewComponent } from './view/product-view/product-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerEditorComponent } from './customer-editor/customer-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BillViewComponent,
    CustomerViewComponent,
    EstimateViewComponent,
    ProductViewComponent,
    CustomerEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // Needed for dialogs
  entryComponents: [CustomerEditorComponent]
})
export class AppModule { }
