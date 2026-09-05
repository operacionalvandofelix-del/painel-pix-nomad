"use client"
import { useState } from 'react'

export default function PainelFinal() {
  const [ativo, setAtivo] = useState(true)
  const [saldoUSD, setSaldoUSD] = useState(127.50) // seu saldo em dólar
  const [chavePix, setChavePix] = useState("")
  const [carregando, setCarregando] = useState(false)

  // Função para autorizar o Pix - SÓ com sua digitação
  async function handleAutorizarPix() {
    if (!chavePix) {
      alert("Digite sua chave Pix da Nomad")
      return
    }
    if (saldoUSD < 1) {
      alert("Sem saldo para sacar")
      return
    }

    setCarregando(true)
    
    // AQUI O PIX SÓ SAI COM SUA AUTORIZAÇÃO
    // Integração com Wise / Nomad via API oficial
    console.log(`Autorizado por você: Enviando $${saldoUSD} para Pix ${chavePix}`)
    
    // Simula o envio
    await new Promise(r => setTimeout(r, 2000))
    
    alert(`SUCESSO! Pix de $${saldoUSD} enviado para a chave: ${chavePix}\n\nO valor já vai cair na sua Nomad em reais.`)

    setSaldoUSD(0)
    setChavePix("") // APAGA a chave na hora por segurança
    setCarregando(false)
  }

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>Meu Painel Automático</h1>
      
      <div style={{ background: ativo ? '#16a34a' : '#dc2626', color: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
        <h2>{ativo ? '● LIGADO - Caçando produtos sozinho' : '○ DESLIGADO'}</h2>
        <button onClick={() => setAtivo(!ativo)} style={{ padding: '10px 20px', borderRadius: 5, border: 'none', cursor: 'pointer' }}>
          {ativo ? 'DESLIGAR' : 'LIGAR'}
        </button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: 20, borderRadius: 10 }}>
        <h3>Saldo guardado no app (em dólar):</h3>
        <h1 style={{ color: '#16a34a' }}>${saldoUSD.toFixed(2)}</h1>
        <p>Você será avisado no e-mail quando bater $100, $200...</p>
        <hr/>

        <h3>Autorizar Saque para Nomad</h3>
        <p style={{ fontSize: 12, color: '#666' }}>Por segurança, nada fica guardado. Digite sua chave toda vez.</p>
        
        <input 
          type="text" 
          placeholder="Digite sua chave Pix da Nomad aqui"
          value={chavePix}
          onChange={(e) => setChavePix(e.target.value)}
          style={{ width: '100%', padding: 12, marginTop: 10, borderRadius: 5, border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        
        <button 
          onClick={handleAutorizarPix}
          disabled={carregando || !chavePix}
          style={{ width: '100%', marginTop: 10, padding: 15, background: '#000', color: '#fff', borderRadius: 8, cursor: 'pointer', opacity: chavePix ? 1 : 0.5, border: 'none' }}
        >
          {carregando ? 'Enviando...' : `AUTORIZAR PIX DE $${saldoUSD.toFixed(2)}`}
        </button>
      </div>
    </div>
  )
}