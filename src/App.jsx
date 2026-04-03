import { useState } from 'react'
import {
  ArrowLeft,
  Box,
  Calendar,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Edit3,
  FileText,
  MapPin,
  MoreHorizontal,
  Package,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  User,
  Users,
  Warehouse,
} from 'lucide-react'
import './App.css'

const orderData = {
  orderNumber: 'DSE1601-26-O93-1',
  quoteNumber: 'DSE1601-26-O93-1',
  customerName: 'Tyson Foods Springdale',
  customerId: '3199',
  billTo: 'Po Box 2020',
  shipTo: 'Po Box 2020',
  paymentTerms: '10 Net',
  opportunityName: '',
  opportunityNumber: '',
  hold: false,
  createdBy: 'Bhava Vemuru',
  lastUpdatedBy: 'Bhava Vemuru',
  pmPhase: 'Fully Paid',
  revision: '1',
  requestDate: '03/31/2026',
  salesRep: 'Bhava Vemuru',
  contactName: 'Fran Ap',
  email: '',
  contactPhone: '8006433410',
  warehouse: '',
  supplier: '',
  supplierSite: '',
  currency: 'USD',
  creationDate: '03/31/2026',
  lastUpdatedDate: '03/31/2026',
  orderDate: '03/31/2026',
  opCo: 'Dorse',
  branch: 'Seattle',
  lob: 'Parts',
  shippingMethod: '',
  orderAmt: '$15.38',
  tax: '$0.00',
  totalAmt: '$15.38',
  customerPO: '',
  customerPOAmt: '',
  orderRep: '',
  orderStatus: 'Processing',
}

const lineItems = [
  {
    line: 1,
    lineType: 'Buy',
    itemNumber: 'Greenheck - SG42S',
    description: 'Steel Sidewall Register w/OBD sur 1601DSEPA',
    warehouse: '',
    supplier: '',
    supplierSite: '',
    requestedDate: '03/31/2026',
    scheduleShipDate: '03/31/2026',
    shipTo: 'Po Box 2020',
  },
]

const additionalData = {
  testBalance: '',
  orderWriter: 'Bhava Vemuru',
  ownerInvolved: '',
  taxExempt: null,
  specificationStrength: '',
  designEngineer: '',
  contactEngineer: '',
  leadNumber: '',
  taxExemptReceived: null,
  ownerDriven: '',
  salesRepOwner: 'Bhava Vemuru',
  engineer: '',
  estimator: '',
  taxExemptCertificate: '',
  shippingInstructions: '',
}

function Section({ icon, iconColor, title, subtitle, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="section-card">
      <div className="section-header" onClick={() => setOpen(!open)}>
        <div className="section-header-left">
          <div className={`section-icon ${iconColor}`}>{icon}</div>
          <div>
            <div className="section-title">{title}</div>
            {subtitle && <div className="section-subtitle">{subtitle}</div>}
          </div>
        </div>
        <ChevronDown size={18} className={`chevron ${open ? 'open' : ''}`} />
      </div>
      {open && <div className="section-body">{children}</div>}
    </div>
  )
}

function Field({ label, value, editable, searchable, wide }) {
  return (
    <div className={`form-group ${wide ? 'span-2' : ''}`}>
      <label className="form-label">{label}</label>
      <div className={`form-value ${editable ? 'editable' : ''}`}>
        <div className="form-value-with-icon">
          <span>{value || '\u2014'}</span>
          {searchable && <Search size={14} className="search-icon" />}
        </div>
      </div>
    </div>
  )
}

function RadioField({ label, value }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="radio-group">
        <label className="radio-label">
          <span className={`radio-custom ${value === true ? 'selected' : ''}`} />
          Yes
        </label>
        <label className="radio-label">
          <span className={`radio-custom ${value === false ? 'selected' : ''}`} />
          No
        </label>
      </div>
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('details')
  const [activeLineTab, setActiveLineTab] = useState('supply')

  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <button className="btn btn-ghost">
            <ArrowLeft size={16} />
            Back to Search
          </button>
        </div>
        <div className="top-bar-right">
          <button className="btn">
            <ClipboardList size={15} />
            Pick Details
          </button>
          <button className="btn btn-primary">
            <Plus size={15} />
            Create New Order
          </button>
          <button className="btn btn-icon btn-ghost">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Order Title Area */}
      <div className="order-title-area">
        <div className="order-title-left">
          <div className="order-icon">
            <FileText size={22} />
          </div>
          <div className="order-title">
            <h1>{orderData.orderNumber}</h1>
            <div className="order-meta">
              <span>{orderData.customerName}</span>
              <span className="separator" />
              <span>Customer # {orderData.customerId}</span>
              <span className="separator" />
              <span className="status-badge status-processing">
                <span className="status-dot" />
                {orderData.orderStatus}
              </span>
              <span className="status-badge status-paid">
                <span className="status-dot" />
                {orderData.pmPhase}
              </span>
            </div>
          </div>
        </div>
        <div className="order-summary-cards">
          <div className="summary-card">
            <div className="label">Order Amt</div>
            <div className="value">{orderData.orderAmt}</div>
          </div>
          <div className="summary-card">
            <div className="label">Tax</div>
            <div className="value">{orderData.tax}</div>
          </div>
          <div className="summary-card">
            <div className="label">Total</div>
            <div className="value highlight">{orderData.totalAmt}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          <FileText size={14} />
          Order Details
        </button>
        <button
          className={`tab ${activeTab === 'attributes' ? 'active' : ''}`}
          onClick={() => setActiveTab('attributes')}
        >
          <Settings size={14} />
          Additional Attributes
        </button>
        <button
          className={`tab ${activeTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          <CreditCard size={14} />
          Payment Details
        </button>
      </div>

      {/* Order Details Tab */}
      {activeTab === 'details' && (
        <>
          <Section
            icon={<Package size={16} />}
            iconColor="blue"
            title="Order Information"
            subtitle="Core order identifiers and dates"
          >
            <div className="form-grid">
              <Field label="Order #" value={orderData.orderNumber} />
              <Field label="Quote #" value={orderData.quoteNumber} />
              <Field label="Revision #" value={orderData.revision} />
              <Field label="Order Date" value={orderData.orderDate} />
              <Field label="Request Date" value={orderData.requestDate} editable />
              <Field label="Creation Date" value={orderData.creationDate} />
              <Field label="Last Updated Date" value={orderData.lastUpdatedDate} />
              <Field label="OpCo" value={orderData.opCo} />
              <Field label="Branch" value={orderData.branch} />
              <Field label="LOB" value={orderData.lob} />
              <Field label="Currency" value={orderData.currency} />
              <Field label="Order Status" value={orderData.orderStatus} />
            </div>
          </Section>

          <Section
            icon={<User size={16} />}
            iconColor="green"
            title="Customer & Contact"
            subtitle="Customer information and contacts"
          >
            <div className="form-grid">
              <Field label="Customer Name" value={orderData.customerName} searchable />
              <Field label="Customer #" value={orderData.customerId} />
              <Field label="Contact Name" value={orderData.contactName} />
              <Field label="Sales Rep" value={orderData.salesRep} />
              <Field label="Contact Phone" value={orderData.contactPhone} />
              <Field label="Email" value={orderData.email} editable />
              <Field label="Bill To" value={orderData.billTo} searchable />
              <Field label="Ship To" value={orderData.shipTo} searchable />
              <Field label="Payment Terms" value={orderData.paymentTerms} />
            </div>
          </Section>

          <Section
            icon={<Truck size={16} />}
            iconColor="amber"
            title="Shipping & Supplier"
            subtitle="Logistics and supplier details"
          >
            <div className="form-grid">
              <Field label="Shipping Method" value={orderData.shippingMethod} editable />
              <Field label="Warehouse" value={orderData.warehouse} editable />
              <Field label="Supplier" value={orderData.supplier} searchable editable />
              <Field label="Supplier Site" value={orderData.supplierSite} searchable editable />
              <Field label="Customer PO #" value={orderData.customerPO} editable />
              <Field label="Customer PO Amt" value={orderData.customerPOAmt} editable />
            </div>
          </Section>

          <Section
            icon={<Users size={16} />}
            iconColor="purple"
            title="Internal Tracking"
            subtitle="Opportunity and audit trail"
          >
            <div className="form-grid">
              <Field label="Opportunity Name" value={orderData.opportunityName} editable />
              <Field label="Opportunity #" value={orderData.opportunityNumber} editable />
              <Field label="Order Rep" value={orderData.orderRep} editable />
              <Field label="Created By" value={orderData.createdBy} />
              <Field label="Last Updated By" value={orderData.lastUpdatedBy} />
              <Field label="PM Phase" value={orderData.pmPhase} />
            </div>
          </Section>
        </>
      )}

      {/* Additional Attributes Tab */}
      {activeTab === 'attributes' && (
        <Section
          icon={<Settings size={16} />}
          iconColor="purple"
          title="Additional Attributes"
          subtitle="Extended order properties and assignments"
        >
          <div className="form-grid">
            <Field label="Test & Balance" value={additionalData.testBalance} editable />
            <Field label="Design Engineer" value={additionalData.designEngineer} editable />
            <Field label="Sales Rep / Account Owner (From CPQ)" value={additionalData.salesRepOwner} />
            <Field label="Order Writer (From CPQ)" value={additionalData.orderWriter} />
            <Field label="Contact Engineer" value={additionalData.contactEngineer} editable />
            <Field label="Engineer" value={additionalData.engineer} editable />
            <Field label="Owner Involved" value={additionalData.ownerInvolved} editable />
            <Field label="Lead #" value={additionalData.leadNumber} editable />
            <Field label="Estimator" value={additionalData.estimator} editable />
            <div className="form-divider" />
            <RadioField label="Tax Exempt" value={additionalData.taxExempt} />
            <RadioField label="Tax Exempt Received" value={additionalData.taxExemptReceived} />
            <Field label="Tax Exempt Certificate" value={additionalData.taxExemptCertificate} editable />
            <Field label="Specification Strength" value={additionalData.specificationStrength} editable />
            <Field label="Owner Driven" value={additionalData.ownerDriven} editable />
            <Field label="Shipping Instructions" value={additionalData.shippingInstructions} editable />
          </div>
        </Section>
      )}

      {/* Payment Details Tab */}
      {activeTab === 'payment' && (
        <Section
          icon={<CreditCard size={16} />}
          iconColor="green"
          title="Payment Details"
          subtitle="Payment method and billing information"
        >
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Payment Type</label>
              <select className="form-select">
                <option value="">Select payment type...</option>
                <option value="credit">Credit Card</option>
                <option value="ach">ACH</option>
                <option value="wire">Wire Transfer</option>
                <option value="check">Check</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Email Receipt</label>
              <div style={{ padding: '8px 0' }}>
                <label className="checkbox-label">
                  <span className="checkbox-custom" />
                  Send email receipt to customer
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter email address..."
              />
            </div>
          </div>
        </Section>
      )}

      {/* Line Items Section */}
      <div className="line-items-section">
        {/* Action Buttons Bar */}
        <div className="action-bar">
          <div className="action-bar-left">
            <button className="btn btn-primary">
              <ShoppingCart size={15} />
              Add Products
            </button>
            <button className="btn">
              <MapPin size={15} />
              Update Ship To
            </button>
            <button className="btn">
              <Warehouse size={15} />
              Update Warehouse
            </button>
            <button className="btn">
              <Box size={15} />
              Update Supplier
            </button>
            <button className="btn btn-ghost">
              <MoreHorizontal size={16} />
              More Actions
            </button>
          </div>
          <div className="action-bar-right">
            <button className="btn">
              <RefreshCw size={15} />
              Refresh
            </button>
            <button className="btn">
              <Calendar size={15} />
              Schedule Lines
            </button>
          </div>
        </div>

        {/* Line Item Tabs */}
        <div className="tabs-container">
          {[
            { id: 'lines', label: 'Line Details' },
            { id: 'supply', label: 'Supply Details' },
            { id: 'line-attributes', label: 'Additional Attributes' },
            { id: 'rma', label: 'RMA Details' },
          ].map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeLineTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveLineTab(tab.id)}
            >
              {tab.label}
              {tab.id === 'supply' && <span className="tab-badge">1</span>}
            </button>
          ))}
        </div>

        {/* Data Table */}
        <div className="table-card">
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="th-checkbox">
                    <span className="checkbox-custom" />
                  </th>
                  <th>Line #</th>
                  <th>Line Type</th>
                  <th>Item #</th>
                  <th className="th-wide">Description</th>
                  <th>Warehouse</th>
                  <th>Supplier</th>
                  <th>Supplier Site</th>
                  <th>Requested Date</th>
                  <th>Schedule Ship Date</th>
                  <th>Ship To</th>
                </tr>
              </thead>
              <tbody>
                {lineItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="td-checkbox">
                      <span className="checkbox-custom" />
                    </td>
                    <td>
                      <span className="line-number">{item.line}</span>
                    </td>
                    <td>
                      <span className="line-type-badge">{item.lineType}</span>
                    </td>
                    <td className="td-mono">{item.itemNumber}</td>
                    <td className="td-description">{item.description}</td>
                    <td>{item.warehouse || '\u2014'}</td>
                    <td>{item.supplier || '\u2014'}</td>
                    <td>{item.supplierSite || '\u2014'}</td>
                    <td className="td-date">{item.requestedDate}</td>
                    <td className="td-date">{item.scheduleShipDate}</td>
                    <td>{item.shipTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <span className="table-footer-info">Showing 1 of 1 line items</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
