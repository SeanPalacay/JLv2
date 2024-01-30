import { Component } from '@angular/core';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.page.html',
  styleUrls: ['./manageuser.page.scss'],
})
export class ManageuserPage {

  deleteAgent(button: any): void {
    const row = button.closest('tr');
    const tableBody = document.getElementById('agentTableBody');
    
    if (row && tableBody) {
      const rowIndex = row.rowIndex;
      tableBody.removeChild(row);

      // Update the IDs of remaining rows after deletion
      for (let i = rowIndex; i < tableBody.children.length; i++) {
        const firstChild = tableBody.children[i].firstElementChild;
        if (firstChild) {
          firstChild.textContent = (i + 1).toString();
        }
      }
    }
  }

  closeModal(): void {
    document.body.classList.remove('modal-active');
    const modalContainer = document.getElementById('myModalContent');
    if (modalContainer) {
      modalContainer.remove();
    }
  }

  loadModalContent(): void {
    document.body.classList.add('modal-active');

    // Remove existing modal if it exists
    const existingModal = document.getElementById('myModalContent');
    if (existingModal) {
      existingModal.remove();
    }

    const modalContainer = document.createElement('div');
    modalContainer.id = 'myModalContent';
    modalContainer.classList.add('modal-content');
    modalContainer.innerHTML = `
      <span class="close-btn" (click)="closeModal()">&times;</span>
      <div id="notification" class="notification"></div>
      <form id="addAgentForm">
        <label for="agentName">Agent Name:</label>
        <input type="text" id="agentName" name="agentName" required>

        <label for="agentEmail">Agent Email:</label>
        <input type="email" id="agentEmail" name="agentEmail" required>

        <label for="locationAssigned">Location Assigned:</label>
        <input type="text" id="locationAssigned" name="locationAssigned" required>

        <label for="documentsAssigned">Documents Assigned:</label>
        <input type="text" id="documentsAssigned" name="documentsAssigned" required>

        <button type="button" (click)="submitForm()">Add Agent</button>
      </form>
    `;

    document.body.appendChild(modalContainer);
  }

  submitForm(): void {
    // Access form fields within the context of the modal
    const agentName = (document.getElementById('agentName') as HTMLInputElement)?.value;
    const agentEmail = (document.getElementById('agentEmail') as HTMLInputElement)?.value;
    const locationAssigned = (document.getElementById('locationAssigned') as HTMLInputElement)?.value;
    const documentsAssigned = (document.getElementById('documentsAssigned') as HTMLInputElement)?.value;

    // Check if any field is empty
    if (!agentName || !agentEmail || !locationAssigned || !documentsAssigned) {
      const notification = document.getElementById('notification');
      if (notification) {
        notification.innerText = 'Incomplete field. Please fill in all fields.';
      }
      return;
    }

    // Clear any previous notifications
    const notification = document.getElementById('notification');
    if (notification) {
      notification.innerText = '';
    }

    // Create a new table row for the submitted agent
    const tableBody = document.getElementById('agentTableBody');
    if (tableBody) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${agentName}</td>
        <td>${agentEmail}</td>
        <td>${locationAssigned}</td>
        <td>${documentsAssigned}</td> 
        <td>
          <div class="actions">
            <div class="icon delete-agent" data-tooltip="Delete Agent" (click)="deleteAgent($event.target)">
              <i class="fas fa-trash"></i>
            </div>
            <div class="icon edit-agent" data-tooltip="Edit Agent">
              <i class="fas fa-edit"></i>
            </div>
            <div class="icon locate-agent" data-tooltip="Locate Agent">
              <i class="fas fa-map-marker-alt"></i>
            </div>
          </div>
        </td>
      `;

      // Append the new row to the table
      tableBody.appendChild(newRow);
    }

    // Close the modal
    this.closeModal();
  }
}
